import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecord } from '@material-ui/icons'
import './Widgets.css'

const Widgets = () => {
  const newsArticles = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticles('Tester Article', 'Top News - 1')}
      {newsArticles('Tester Article', 'Top News - 2')}
      {newsArticles('Tester Article', 'Top News - 3')}
      {newsArticles('Tester Article', 'Top News - 4')}
    </div>
  )
}

export default Widgets
