import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "./Loading";
import { useResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults(
      `${location.pathname}?term=${searchTerm}&region=wt-wt&safeSearch=off`
    );
  }, [searchTerm, location.pathname]);
  console.log("Results are : ", results);

  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search/videos":
      return (
        <div className="flex flex-wrap justify-evenly">
          {results?.data?.map(
            ({ url, title, publishedOn, description, duration }, index) => (
              <div
                key={index}
                className="p-2 m-4 bg-blue-100 rounded dark:bg-blue-950 shadow-md"
              >
                <ReactPlayer
                  url={url}
                  controls
                  width="355px"
                  height="200px"
                  className="flex justify-center items-center"
                />
                <div className="flex flex-wrap">
                  <h3>
                    {title?.length > 20
                      ? title.substring(0, 20) + "..."
                      : title}
                  </h3>
                  <p className="mx-4">{publishedOn}</p>
                </div>
                <div className="flex flex-wrap">
                  <h3>
                    {description?.length > 25
                      ? description.substring(0, 25) + "..."
                      : description}
                  </h3>
                  <p className="mx-4">Duration : {duration}</p>
                </div>
              </div>
            )
          )}
        </div>
      );

    case "/search/news":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.data?.map(
            ({ date, image, url, excerpt, title, relativeTime }, index) => (
              <div
                key={index}
                className="md:w-2/5 w-full bg-blue-200 rounded p-4 shadow-md dark:bg-blue-950"
              >
                <div className="flex flex-wrap justify-start items-center">
                  <img src={image} height={80} width={80} alt={title} />
                  <p className="mx-4">{relativeTime}</p>
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer "
                  className="hover:underline "
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
                <div className="flex gap-4">
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:text-blue-300"
                  >
                    {" "}
                    {excerpt?.length > 100
                      ? excerpt.substring(0, 100)
                      : excerpt}
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      );

    case "/search":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.data?.map(
            ({ hostname, icon, description, url, title }, index) => (
              <div
                key={index}
                className="md:w-2/5 w-full bg-slate-300  dark:bg-slate-600 rounded p-4 shadow-md"
              >
                <div className="flex flex-wrap">
                  <img src={icon} height={30} width={30} />
                  <p className="mx-4">
                    {hostname?.length > 20
                      ? hostname.substring(0, 20)
                      : hostname}
                  </p>
                </div>
                <h2 className="text-lg">
                  {description?.length > 100
                    ? description.substring(0, 100)
                    : description}
                </h2>
                <a href={url} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {url?.length > 30 ? url.substring(0, 30) : url}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                    {title}
                  </p>
                </a>
              </div>
            )
          )}
        </div>
      );

    case "/search/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.data?.map(({ image, source, url, title }, index) => (
            <a
              href={url}
              target="_blank"
              key={index}
              rel="noreferrer"
              className="sm:p-3 p-5"
            >
              <img
                src={image}
                height={200}
                width={200}
                alt={title}
                loading="lazy"
              />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">
                <h4 className="text-blue-900 font-bold">{source}</h4>
                {title}
              </p>
            </a>
          ))}
        </div>
      );

    default:
      return "Error...";
  }
};

export default Results;
