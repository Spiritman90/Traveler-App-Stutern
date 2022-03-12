import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function News() {
  let params = useParams();
  const travelNews = useSelector((state) => state.travelNewsData);
  const newItem = travelNews.find((data) => {
    return data.title === params.newsId;
  });
  console.log(newItem);

  return (
    <div className='news__container'>
      <h1 className='news__title'>{newItem?.title}</h1>
      <img
        src={
          newItem?.image_url
            ? newItem.image_url
            : "https://namagic.com/wp-content/uploads/2020/10/news.jpg"
        }
        alt='news'
        className='news__photo'
      />
      <p className='news__text'> {newItem?.description}</p>
      <p>Author: {newItem?.creator ? newItem.creator : "Adewole Femi"}</p>
      <p> Published at: {newItem?.pubDate}</p>
      <a
        href={newItem?.link}
        target='_blank'
        rel='noreferrer'
        className='news__link'
      >
        Read full story...
      </a>
    </div>
  );
}

export default News;
