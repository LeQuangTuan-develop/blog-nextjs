import slugify from 'slugify';
import { Blog, TBlog } from '../components/page/type';

export const SlugService = {

  getSlug(str: string){
    return slugify(str, {locale: 'vi'}).toLowerCase()
  },

  gerateBlogUrl(data: {id:string | number, name:string}){
    return '/blog/'+ data.id +'-'+ this.getSlug(data.name)
  },

  gerateChartPatternUrl(data: {id:string | number, name:string}){
    return '/learn/learn-chart/'+ data.id +'-'+ this.getSlug(data.name)
  }

};
