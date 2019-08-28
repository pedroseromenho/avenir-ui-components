import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import s from './style.module.scss';

const NewsFeed = ({
  img,
  title,
  topics,
  excerpt,
  date,
}) => (
  <div className={s.container}>
    <div className={s.container__actions}>
      <Button icon={faEllipsisH} />
    </div>
    <div className={s.container__content}>
      <h2 className={s.container__content__title}>{title}</h2>
      <p className={s.container__content__date}>{date}</p>
      <p className={s.container__content__excerpt}>{excerpt}</p>
    </div>
    {img && <div className={s.container__img}><img alt={title} src={img} /></div>}
  </div>
);

NewsFeed.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  topics: PropTypes.array,
  date: PropTypes.string,
};

export default NewsFeed;
