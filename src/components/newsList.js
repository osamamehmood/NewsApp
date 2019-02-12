import React from 'react';

const NewsList = (props) => {
  const news = props.news.map(news => {
    return(
      <div>
        <h3>{news.title}</h3>
        <div>{news.feed}</div>
      </div>
    )
  })

  return (
    <div>
      {news}
    </div>
  );
}

export default NewsList;