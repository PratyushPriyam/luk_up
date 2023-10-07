import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All', exact: true },
  { url: '/search/news', text: '📰 News' },
  { url: '/search/images', text: '📸 Images' },
  { url: '/search/videos', text: '📺 Videos' },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text, exact }, index) => (
        <NavLink
          to={url}
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
          className="m-2 mb-0"
          key={index}
          exact={exact}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
