import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = (props) => {
  const news = props.news.map(news => {
    return(
      <NewsListItem news={news} key={news.id}/>
    )
  })

  return (
    <div>
      {news}
    </div>
  );
}

export default NewsList;