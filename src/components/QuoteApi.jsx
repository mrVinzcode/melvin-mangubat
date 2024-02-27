import { useEffect, useState } from "react";

export default function QuoteApi() {
  const [quote, setQuote] = useState([]);

  const handleQuote = () => {
    let api = "http://api.quotable.io/random";

    fetch(api)
      .then((res) => res.json())
      .then((results) => {
        setQuote(results);
        console.log(results);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleQuote();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="my-14 italic text-sm/6 max-w-[24rem] font-semibold text-widest hidden lg:block">
      <p className="text-leading-7 text-base ">{quote.content}</p>
      <p className="text-right pt-2 text-slate-100 font-bold">{quote.author}</p>
    </div>
  );
}
