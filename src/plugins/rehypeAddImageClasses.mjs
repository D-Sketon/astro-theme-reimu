import { visit } from 'unist-util-visit';

const rehypeAddImageClasses = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties.className = node.properties.className 
          ? [... node.properties.className, 'lazyload']
          :  ['lazyload'];
      }
    });
  };
}

export default rehypeAddImageClasses;