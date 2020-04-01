import * as React from 'react';
import styles from './Hello.module.scss';
import { IHelloProps } from './IHelloProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Hello extends React.Component<IHelloProps, {}> {
  public render(): React.ReactElement<IHelloProps> {
    return (
      <div className={ styles.hello }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint! Shobha</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>

              <p className={ styles.description }>Web Title is : {escape(this.props.pageContext.web.title)}</p>
              <p className={ styles.description }>Description is : {escape(this.props.description)}</p>

              <p className={ styles.description }>Age is : {escape(this.props.age)}</p>

              <p className={ styles.description }>Test is : {escape(this.props.test)}</p>
              <p className={ styles.description }>Test1 is : {(this.props.test1)}</p>
              <p className={ styles.description }>Test2 is : {escape(this.props.test2)}</p>
              <p className={ styles.description }>Test3 is : {(this.props.test3)}</p>




              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
