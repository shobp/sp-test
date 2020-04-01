import {PageContext} from '@microsoft/sp-page-context' // load page context decalaration

export interface IHelloProps {
  description: string;
  age: string;
  test:string;
  test1:boolean;
  test2:string;
  test3:boolean;
  pageContext:PageContext;
}
