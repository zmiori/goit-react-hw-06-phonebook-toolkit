import { Component } from 'react';
import s from './Section.module.css';

class Section extends Component {
  normalizedTitle = t => {
    return t[0].toUpperCase() + t.slice(1);
  };

  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        {title ? (
          <h2 className={s.title}>{this.normalizedTitle(title)}</h2>
        ) : (
          ''
        )}
        {children}
      </section>
    );
  }
}

export default Section;
