import partial from 'lodash.partial'

import * as ArticleGateway from './ArticleGateway'

import _LoadArticle from './LoadArticle'
export const LoadArticle = partial(_LoadArticle, ArticleGateway)
