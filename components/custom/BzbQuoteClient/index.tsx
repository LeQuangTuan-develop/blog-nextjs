'use client';

import { useEffect, useState } from 'react';
import { ApiService, END_POINT_URL_LIST } from '../../../services';
import { tap } from 'rxjs';

export type TQuote = {
  text: string;
  author: string;
};

const FancyQuote = (data: TQuote) => {
  return (
    <blockquote className="border px-4 py-3 rounded-xl border-default-200 dark:border-default-100 bg-default-200/20 hidden lg:block cursor-pointer">
      <p>
        {data.text} -- <strong className="font-bold"> {data.author} </strong>
      </p>
    </blockquote>
  );
};

const QuoteClient = () => {
  const [quote, setQuote] = useState({} as TQuote);
  const [isLoading, setIsLoading] = useState(true);

  const getQuoteData = () => {
    setIsLoading(true);
    const d$ = ApiService.getClient(END_POINT_URL_LIST.RANDOM_QUOTE)
      .pipe(
        tap((data) => {
          setQuote(data);
          setIsLoading(false);
        }),
      )
      .subscribe();
    return () => d$.unsubscribe();
  };

  useEffect(() => {
    getQuoteData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-start max-w-2xl">
        {isLoading ? (
          <span>...</span>
        ) : (
          quote.text && (
            // <span className="hidden lg:block cursor-pointer " onClick={!isLoading && getQuoteData }>
            //   {quote.text} -- <strong>{quote.author}</strong>
            // </span>
            <div onClick={!isLoading && getQuoteData}>
              <FancyQuote {...quote} />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default QuoteClient;
