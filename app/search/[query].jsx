// "use client";
// import { useSearchParams } from "next/navigation";
// import React from "react";

// const SearchResult = ({ params }) => {
//   const { query } = params;
//   return <div>SearchResult</div>;
// };

// export default SearchResult;
// pages/search/[q].js
"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SearchResultsPage = () => {
  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    if (q) {
      // Do something with the query parameter, like fetch search results
      console.log("Search query:", q);
    }
  }, [q]);

  return (
    <div>
      <h1>Search Results for "{q}"</h1>
      {/* You can fetch search results based on the 'q' parameter here */}
    </div>
  );
};

export default SearchResultsPage;
