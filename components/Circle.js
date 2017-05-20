import React from 'react';

export default class Circle extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    return (this.props.color !== nextProps.color) //if colors are same, returns false
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}
