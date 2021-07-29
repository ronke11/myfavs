import GridLayout from 'react-grid-layout';

class MyFirstGrid extends React.Component {
  // The following example below will produce a grid with three items where:
  // users will not be able to drag or resize item a
  // item b will be restricted to a minimum width of 2 grid blocks and a maximum width of 4 grid blocks
  // users will be able to freely drag and resize item c

  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a"><img src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=5P-MAjr-" /></div>
        <div key="a"><img src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=5P-MAjr-" /></div>
      </GridLayout>
    )
  }
}