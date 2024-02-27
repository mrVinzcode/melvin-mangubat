import { useEffect, useState } from "react";

export default function QuoteApi() {
  const [quote, setQuote] = useState([]);

  const handleQuote = () => {
    let api = "https://api.quotable.io/random";

    fetch(api)
      .then((res) => res.json())
      .then((results) => {
        setQuote(results);
        console.log("Fetched quote:", results);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleQuote();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="my-14 italic max-w-[24rem] lg:text-sm font-semibold text-widest">
      <p className="text-leading-7 text-base ">&#8220;{quote.content}&#8221;</p>
      <p className="text-right pt-2 text-slate-100 font-bold">
        &#8211; {quote.author}
      </p>
    </div>
  );
}
