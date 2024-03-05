import { useEffect, useState } from "react";

export default function QuoteApi() {
  const [quote, setQuote] = useState([]);

  let api = "https://api.quotable.io/random";
  const handleQuote = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setQuote(data);
      console.log("Fetch Quote:", data);
    } catch (error) {
      console.log("Error Fetch Quote:", error);
    }
  };

  useEffect(() => {
    handleQuote();

    const intervalId = setInterval(() => {
      handleQuote();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="my-14 italic max-w-[24rem] max-h-12 hidden lg:block lg:text-sm font-semibold text-widest">
      {quote.content ? (
        <>
          <p className="text-leading-7 text-base ">
            &#8220;{quote.content}&#8221;
          </p>
          <p className="text-right pt-2 text-slate-100 font-bold">
            &#8211; {quote.author}
          </p>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
