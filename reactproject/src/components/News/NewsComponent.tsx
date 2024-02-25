import React from 'react';
import NewsProperty from '../../enums/NewsEnum.ts';
import LikeDislikeButtons from './LikeDislikeButtons';

interface NewsItem {
  [NewsProperty.ID]: number;
  [NewsProperty.DATE]: string;
  [NewsProperty.TITLE]: string;
  [NewsProperty.CONTENT]: string;
}

const NewsComponent: React.FC<{ news: NewsItem; hidden?: boolean }> = ({ news, hidden }) => {
  return (
    <div className={`card ${hidden ? 'hidden-card' : ''}`}>
      <h3>{news[NewsProperty.TITLE]}</h3>
      {/* Ajoutez le composant LikeDislikeButtons ici */}
      <LikeDislikeButtons newsId={news[NewsProperty.ID]} />
      <p>{news[NewsProperty.DATE]}</p>
      <p>{news[NewsProperty.CONTENT]}</p>
    </div>
  );
};

export default NewsComponent;
