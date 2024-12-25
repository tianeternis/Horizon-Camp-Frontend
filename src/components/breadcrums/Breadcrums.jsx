import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatches } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Breadcrumbs = ({}) => {
  const [crumbs, setCrumbs] = useState([]);
  const matches = useMatches();

  const { t } = useTranslation();

  useEffect(() => {
    const crumbs = matches
      .filter((match) => Boolean(match.handle?.crumb))
      .map((match) => {
        return {
          path: match.pathname,
          payload: match.handle.crumb(match.data),
        };
      });

    setCrumbs(crumbs);
  }, [matches]);

  return (
    crumbs &&
    crumbs.length > 1 && (
      <div className="w-full border-t border-solid border-white/20 bg-secondary/50">
        <div className="mx-auto max-w-screen-xl px-3 py-3.5">
          <ul className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-white sr-500:text-sm">
            {crumbs.map((crumb, index) => {
              const {
                payload: { trans, data },
              } = crumb;
              const label = data ? data : t(trans);

              return (
                <li key={index}>
                  {index === crumbs.length - 1 ? (
                    <span className="text-main">{label}</span>
                  ) : (
                    <>
                      <Link to={crumb.path} className="hover:text-main">
                        <span className="inline-flex items-center gap-1.5">
                          {index === 0 && <IoHome />}
                          {label}
                        </span>
                      </Link>
                      <span className="pl-2.5">/</span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  );
};

export default Breadcrumbs;
