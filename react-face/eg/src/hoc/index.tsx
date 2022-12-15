import React, { Component } from 'react';

interface State {
  name: string;
}
export const decoratorsWithName = (height?: number) => {
  return (WarpConponent: any) => {
    // eslint-disable-next-line react/display-name
    return class extends Component<any, State> {
      public state:State = {
        name: ''
      }
      ComponentWillMount() {
        const userName = localStorage.getItem('userName');
        this.setState({
          name: userName || ''
        })
      }
      render() {
        return  <div>
        <WarpConponent name={this.state.name} {...this.state} />
        <p>身高是{height}</p>
                </div>
      }
    }
  }
}