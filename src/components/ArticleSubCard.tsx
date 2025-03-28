import { Component } from 'solid-js';
import { Article } from '~/features/articles';
import { formatDate } from '~/utils/date';

type Props = {
  article: Article;
};

export const ArticleSubCard: Component<Props> = (props) => {
  return (
    <a
      class="bg-blue/5 rounded text-white backdrop-blur-sm flex hover:bg-blue/10 transition-colors duration-200 flex max-sm:flex-col"
      href={props.article.url}
    >
      <div class="px-4 py-2 flex-1 flex flex-col">
        <div class="flex-1">
          <h2 class="font-bold line-clamp-1">{props.article.title}</h2>
        </div>
        <div class="text-sm text-gray-400 space-x-2">
          <span>
            {formatDate(new Date(props.article.postedAt), 'YYYY-MM-DD')}
          </span>
          <span>/</span>
          <span>{props.article.source}</span>
        </div>
      </div>
      <img
        src={props.article.ogImageUrl}
        alt=""
        class="aspect-[1200/630] h-16 object-cover rounded-r"
      />
    </a>
  );
};
