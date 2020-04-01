declare interface IHelloWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AgeFieldLabel:string;
  PropertyPaneAge:string;
}

declare module 'HelloWebPartStrings' {
  const strings: IHelloWebPartStrings;
  export = strings;
}
