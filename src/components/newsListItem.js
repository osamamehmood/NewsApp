import React from 'react';

const NewsListItem = (props) => {
  console.log(props.news);
  return(
    <div>
      <div>
        <h3>{props.news.title}</h3>
        <div>{props.news.feed}</div>
      </div>
    </div>
  )
}

export default NewsListItem;