import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import {PageContext} from '@microsoft/sp-page-context' // load page context decalaration


import * as strings from 'HelloWebPartStrings';
import Hello from './components/Hello';
import { IHelloProps } from './components/IHelloProps';

export interface IHelloWebPartProps {
  description: string;
  age: string;
  test:string;
  test1:boolean;
  test2:string;
  test3:boolean;
  pageContext:PageContext;
}

export default class HelloWebPart extends BaseClientSideWebPart <IHelloWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloProps> = React.createElement(
      Hello,
      {
        description: this.properties.description,
        age: this.properties.age,
        test:this.properties.test,
        test1:this.properties.test1,
        test2:this.properties.test2,
        test3:this.properties.test3,
        pageContext:this.context.pageContext

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
            
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('age', {
                  label: strings.AgeFieldLabel
                }),

                PropertyPaneTextField('test', {
                  label: 'Multi-line Test Field',
                  multiline:true
                }),
                PropertyPaneCheckbox('test1', {
                  text:'Checkbox'
                }),
                PropertyPaneDropdown('test2', {
                  label: "Dropdown",
                  options:[
                    {key:'1', text:'One'},
                    {key:'2', text:'Two'},
                    {key:'3', text:'Three'},
                    {key:'4', text:'Four'}
                  ]}),
                PropertyPaneToggle('test3', {
                  label: 'Toggle',
                  onText:'On',
                  offText:'off'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
