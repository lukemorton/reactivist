import React from 'react'

export default ({ title, content }) =>
  <article dangerouslySetInnerHTML={{ __html: title.html + content.html }} />
